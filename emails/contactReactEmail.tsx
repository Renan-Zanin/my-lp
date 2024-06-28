import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Agradeço pelo contato inicial</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://rzanindev.com.br/emailLogo.png`}
            width="110"
            height="25"
            alt="RZanin logo"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Prezado(a) {name},</Text>
          <Text style={paragraph}>
            Espero que esta mensagem o (a) encontre bem.
          </Text>

          <Hr style={hr} />
          <Text style={paragraph}>
            Gostaria de agradecer por entrar em contato e manifestar interesse
            em desenvolver seu novo site comigo. Fico muito feliz em saber que
            você me escolheu para este projeto tão importante.
          </Text>
          <Text style={paragraph}>
            Estou ansioso para entender suas necessidades e expectativas, de
            forma a criar um site que reflita perfeitamente sua visão e
            objetivos. Nos próximos dias, entrarei em contato para agendarmos
            uma reunião inicial, onde poderemos discutir todos os detalhes
            necessários e alinhar os próximos passos para o desenvolvimento do
            seu site.
          </Text>
          <Text style={paragraph}>
            Enquanto isso, caso tenha alguma dúvida ou precise de mais
            informações, sinta-se à vontade para entrar em contato comigo
            diretamente.
          </Text>
          <Text style={paragraph}>
            Agradeço mais uma vez pela confiança em nosso trabalho. Estamos
            entusiasmados em começar essa jornada com você.
          </Text>
          <Text style={paragraph}>— Renan Zanin Oliveira</Text>
          <Hr style={hr} />
          <Text style={footer}>
            <Link style={anchor} href="https://rzanindev.com.br">
              Visite meu site
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
