import DesignScreen from "@/src/components/DesignScreen";
import landing from "@/src/screens/landing";

export default function Page() {
  return <DesignScreen screen={landing} next="/book" />;
}
