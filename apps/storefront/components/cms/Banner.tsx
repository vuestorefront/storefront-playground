import Image from 'next/image';
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { AgnosticCmsButton, AgnosticCmsImage } from './types';

type BannerProps = {
  title: string;
  subtitle: string;
  description: string;
  button: AgnosticCmsButton[];
  backgroundColor: string;
  image: AgnosticCmsImage[];
  className?: string;
};

export default function Banner({
  title,
  subtitle,
  description,
  button,
  backgroundColor,
  image,
  className,
}: BannerProps) {
  return (
    <div
      className={classNames(
        'flex justify-between overflow-hidden w-full h-full grow flex-col md:flex-row flex-wrap',
        className,
      )}
      style={{ backgroundColor }}
      data-testid="banners"
    >
      <img
        src={image.length && image[0] ? image[0].desktop! : ''}
        alt={title}
        className="w-full object-contain aspect-square flex-grow flex-shrink basis-1/2 md:max-w-3xl"
        width={300}
        height={300}
      />
      <div className="flex flex-col justify-center p-6 lg:p-10 flex-grow flex-shrink-0 items-center md:items-start">
        <p
          className="uppercase typography-text-xs block font-bold tracking-widest md:typography-headline-6"
          data-testid="section-subtitle"
        >
          {subtitle}
        </p>
        <h2 className="mb-4 mt-2 font-bold typography-headline-3 md:typography-headline-2" data-testid="section-title">
          {title}
        </h2>
        <p className="typography-text-base block mb-4 md:typography-text-lg" data-testid="section-description">
          {description}
        </p>
        {button && button[0] && (
          <SfButton className="!bg-black" as={Link} href={button[0].link ?? ''}>
            {button[0].label}
          </SfButton>
        )}
      </div>
    </div>
  );
}
