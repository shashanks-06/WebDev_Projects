import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { GrMail } from "react-icons/gr";
import { BsChatFill } from "react-icons/bs";
import InfoCards from "../Dashboard/components/InfoCards";
import contact from "/contact.svg";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          leftComponent={<ContactCard />}
          icon={GrMail}
          title="Contact US"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          leftComponent={
            <InfoCards
              inverted={true}
              imgUrl={contact}
              text="Chat with us now"
              tagText="ChatBot"
            />
          }
          icon={BsChatFill}
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
