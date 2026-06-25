import DesignScreen from "@/src/components/DesignScreen";
import success from "@/src/screens/success";

export default function Page() {
  return <DesignScreen screen={success} next="/" back="/" />;
}
