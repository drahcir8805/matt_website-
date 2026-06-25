import DesignScreen from "@/src/components/DesignScreen";
import quote from "@/src/screens/quote";

export default function Page() {
  return <DesignScreen screen={quote} next="/invoice" />;
}
