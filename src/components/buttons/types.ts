type Variant = 'primary' | 'basic';
export type ButtonProps = {
  title?: string;
  variant?: Variant;
} & React.ComponentPropsWithRef<'button'>;
