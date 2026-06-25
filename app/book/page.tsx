import DesignScreen from "@/src/components/DesignScreen";
import applicationForm from "@/src/screens/application-form";

export default function Page() {
  return <DesignScreen screen={applicationForm} next="/chat" back="/" />;
}
