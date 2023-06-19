export type PropsLink = {
  href: string;
  as?: string | undefined;
  replace?: boolean | undefined;
  scroll?: boolean | undefined;
  shallow?: boolean | undefined;
  passHref?: boolean | undefined;
  prefetch?: boolean | undefined;
  target?: '_self' | '_blank' | '_parent' | '_top';
  onClick?: () => void;
  title?: string & HTMLElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attribute: any;
};
