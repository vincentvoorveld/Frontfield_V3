import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Shield } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Bericht verzonden!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Er ging iets mis",
        description: error.message || "Probeer het later opnieuw.",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertel ons over je project en wij nemen contact met je op
          </p>
        </div>
        
        <Card className="shadow-sm">
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Naam <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Je volledige naam" {...field} />
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
                        <FormLabel>
                          E-mailadres <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="je@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrijfsnaam</FormLabel>
                      <FormControl>
                        <Input placeholder="Je bedrijfsnaam (optioneel)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget indicatie</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer een budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="500-1000">€500 - €1.000</SelectItem>
                          <SelectItem value="1000-2500">€1.000 - €2.500</SelectItem>
                          <SelectItem value="2500-5000">€2.500 - €5.000</SelectItem>
                          <SelectItem value="5000+">€5.000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Projectomschrijving <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Vertel ons over je project, doelen en wensen..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={contactMutation.isPending}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-12 py-4 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Verzenden..." : "Verzend aanvraag"}
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-sm">
                <Shield className="inline w-4 h-4 text-accent mr-2" />
                Je gegevens worden vertrouwelijk behandeld volgens ons privacybeleid
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
