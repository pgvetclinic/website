type TestimonialProps = {
  src: string;
};

export default function Testimonial({ src }: TestimonialProps) {
  return (
    <iframe src={src} width='350' height='255' allowFullScreen={true}></iframe>
  );
}
