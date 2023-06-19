import Link from 'next/link';
import React from 'react';

import { PropsLink } from '@/components/text_links/types';

const TextLink: React.FC<PropsLink> = ({
  href,
  as,
  title,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  target = '_parent',
  onClick,
  ...res
}) => {
  return (
    <>
      {target === '_blank' && (
        <a target='' href={href} onClick={() => onClick?.()} {...res}>
          {title}
        </a>
      )}
      {target !== '_blank' && (
        <Link
          href={href}
          onClick={() => onClick?.()}
          replace={replace}
          as={as}
          scroll={scroll}
          shallow={shallow}
          passHref={passHref}
          prefetch={prefetch}
          {...res}
        >
          ffff
        </Link>
      )}
    </>
  );
};

export default TextLink;
