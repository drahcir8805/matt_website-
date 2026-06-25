import DesignScreen from "@/src/components/DesignScreen";
import chat from "@/src/screens/chat";

export default function Page() {
  return <DesignScreen screen={chat} next="/quote" />;
}
