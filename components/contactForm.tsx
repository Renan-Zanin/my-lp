"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1),
  message: z.string().min(1),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  return (
    <>
      {!firstRender ? (
        <div className="flex flex-col justify-start md:w-full w-[80vw]">
          <Form {...form}>
            <form className="space-y-4 my-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[18px]">Nome</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Nome"
                        {...field}
                        className="bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border-purple-500"
                      />
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
                    <FormLabel className="md:text-[18px]">Whatsapp</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Whatsapp"
                        type="phone"
                        {...field}
                        className="bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border-purple-500"
                      />
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
                    <FormLabel className="md:text-[18px]">Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Email"
                        {...field}
                        type="email"
                        className="bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border-purple-500"
                      />
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
                    <FormLabel className="md:text-[18px]">Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder="Me conte mais sobre suas necessidades"
                        className="bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
