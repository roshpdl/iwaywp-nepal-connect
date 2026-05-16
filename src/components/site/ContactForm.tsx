"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [purpose, setPurpose] = useState("");

  return (
    <form
      className="space-y-5 rounded-xl border border-border bg-background p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        toast.success("Thank you for reaching out. We’ll follow up through the chapter email.");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="organisation">Organization</Label>
        <Input id="organisation" name="organisation" placeholder="Institution or organization" />
      </div>
      <div className="space-y-2">
        <Label>Purpose</Label>
        <Select value={purpose} onValueChange={setPurpose}>
          <SelectTrigger>
            <SelectValue placeholder="Select your purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="membership">Membership inquiry</SelectItem>
            <SelectItem value="partnership">Partnership or collaboration</SelectItem>
            <SelectItem value="event">Event or speaking opportunity</SelectItem>
            <SelectItem value="media">Media or communication</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us how you'd like to connect." className="min-h-32" required />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Send inquiry
      </Button>
    </form>
  );
}
