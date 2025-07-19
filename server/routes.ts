import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New contact submission:", contact);
      
      res.json({ success: true, message: "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Ongeldige gegevens", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating contact:", error);
      res.status(500).json({ 
        success: false, 
        message: "Er is een fout opgetreden. Probeer het later opnieuw." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
