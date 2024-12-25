import React from "react";
import {
  Html,
  Text,
  Body,
  Container,
  Button,
  Tailwind,
  Link,
  Preview,
  Head,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Preview>Welcome template</Preview>
      <Tailwind>
        <Head>
          <Text className="font-semibold text-2xl text-green-800">
            My Next Application Test
          </Text>
        </Head>
        <Body>
          <Text className="font-mono text-slate-500 font-black">
            This going to be my body text
          </Text>
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://linear.app"
          >
            Click Me!
          </Button>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
