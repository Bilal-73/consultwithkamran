import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, CheckCircle, Home } from "lucide-react";
import type { Route } from "./+types/book";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { ChatbotWidget } from "~/components/chatbot-widget/chatbot-widget";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form/form";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select/select";
import { services } from "~/data/services";
import styles from "./book.module.css";

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book a Consultation - Consult with Kamran" },
    {
      name: "description",
      content: "Schedule your personalized consultation session. Fill out the form to book your appointment.",
    },
  ];
}

export default function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const selectedService = services.find((s) => s.id === form.watch("service"));

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.formContainer}>
          {!isSubmitted ? (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Book Your Consultation</h1>
                <p className={styles.subtitle}>
                  Fill out the form below to schedule your personalized consultation session. I'll review your request
                  and confirm your appointment shortly.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                  <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Personal Information</h2>
                    <div className={styles.formGrid}>
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Consultation Details</h2>
                    <div className={styles.formGrid}>
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem className={styles.formGridFull}>
                            <FormLabel>Select Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose a consultation service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.id} value={service.id}>
                                    {service.title} ({service.duration})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className={styles.formGridFull}>
                            <FormLabel>Additional Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me more about what you'd like to discuss..."
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <Calendar className={styles.submitIcon} />
                    Request Consultation
                  </button>
                </form>
              </Form>
            </>
          ) : (
            <div className={styles.successMessage}>
              <CheckCircle className={styles.successIcon} />
              <h2 className={styles.successTitle}>Consultation Request Received!</h2>
              <p className={styles.successText}>
                Thank you for booking a consultation with Kamran. Your request has been successfully submitted. You will
                receive a confirmation email shortly with further details.
              </p>

              {submittedData && (
                <div className={styles.successDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Name:</span>
                    <span className={styles.detailValue}>
                      {submittedData.firstName} {submittedData.lastName}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email:</span>
                    <span className={styles.detailValue}>{submittedData.email}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Service:</span>
                    <span className={styles.detailValue}>{selectedService?.title || submittedData.service}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Preferred Date:</span>
                    <span className={styles.detailValue}>
                      {new Date(submittedData.preferredDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Preferred Time:</span>
                    <span className={styles.detailValue}>{submittedData.preferredTime}</span>
                  </div>
                </div>
              )}

              <Link to="/" className={styles.backButton}>
                <Home className={styles.backIcon} />
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}
