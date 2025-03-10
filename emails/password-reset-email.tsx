import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const PasswordResetEmail = ({ token }: { token: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password to regain access to your account!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>courseene</Heading>
            <Hr style={hr} />
            <Text style={paragraph}>
              We received a request to reset your password. If you did not make this request, you can safely ignore this email.
            </Text>
            <Text style={paragraph}>
              To reset your password, click the button below:
            </Text>
            <Button style={button} href={`${process.env.NEXT_PUBLIC_URL}/reset/${token}`}>
              Reset Password
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>— The courseene team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              courseene, 354 Hills Manchestar Buildings, San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default PasswordResetEmail;

const heading = {
  color: "#6d69d6",
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600
};

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