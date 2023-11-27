type TestimonialProps = {
  src: string;
};

export default function Testimonial({ src }: TestimonialProps) {
  return (
    <iframe
      src={src}
      width='350'
      height='255'
      allowFullScreen={true}
      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
    ></iframe>
  );
}
