type Props = {
  children?: React.ReactNode;
};
export default function LayoutScreenHome({ children }: Props) {
  return (
    <div className="layout">
      <div className="layout__content">{children}</div>
    </div>
  );
}
