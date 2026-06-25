import DesignScreen from "@/src/components/DesignScreen";
import quotePending from "@/src/screens/quote-pending";

export default function Page() {
  return <DesignScreen screen={quotePending} next="/quote" />;
}
