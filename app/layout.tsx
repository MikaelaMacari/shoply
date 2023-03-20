type RootLayoutPropsType = {
  children?: JSX.Element;
};
export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
