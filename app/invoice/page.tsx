import DesignScreen from "@/src/components/DesignScreen";
import invoice from "@/src/screens/invoice";

export default function Page() {
  return <DesignScreen screen={invoice} next="/success" />;
}
