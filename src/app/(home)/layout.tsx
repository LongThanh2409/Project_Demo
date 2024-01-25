import { MainLayout } from "@/src/layouts";

type Props = {
  children?: React.ReactNode;
};
export default function LayoutScreenHome({ children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
