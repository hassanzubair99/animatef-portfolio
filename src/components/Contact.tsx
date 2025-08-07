"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <footer id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="py-6"/>
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
                      <Input type="email" placeholder="your.email@example.com" {...field} className="py-6"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} rows={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full text-lg py-7 font-semibold text-primary-foreground bg-accent hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
                style={{
                    background: 'linear-gradient(to right, hsl(var(--accent)), #a855f7)',
                }}
              >
                Send Message
              </Button>
            </form>
          </Form>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Or connect with me on social media</p>
            <div className="flex justify-center gap-6 mt-6">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Github size={28} /></a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={28} /></a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={28} /></a>
            </div>
             <p className="text-sm text-muted-foreground mt-12">&copy; {new Date().getFullYear()} M.HASSAN ZUBAIR. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
