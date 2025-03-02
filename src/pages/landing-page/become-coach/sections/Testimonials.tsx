import { Avatar, AvatarFallback, AvatarImage, Icon } from "@/components/inc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonials() {
  const items = [
    {
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "James Chadwick",
      role: "Chemist",
      testimonial:
        "This platform has completely transformed my coaching journey! The tools, resources, and seamless scheduling system make it easy to connect with clients and track their progress. Highly recommended!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Marie Curie",
      role: "Physicist",
      testimonial:
        "The user-friendly interface has made managing my client appointments and progress so much easier. I love how intuitive everything is!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Isaac Newton",
      role: "Mathematician",
      testimonial:
        "A fantastic platform that has streamlined my work. The features are incredibly helpful, and I’m seeing the benefits already!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Ada Lovelace",
      role: "Computer Scientist",
      testimonial:
        "Such a great tool for professionals like me. It’s not only functional but also offers a great support community. Highly effective!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Alan Turing",
      role: "Mathematician & Computer Scientist",
      testimonial:
        "I’ve been able to organize my sessions and keep track of my clients effortlessly. This has been a game-changer for my work!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Grace Hopper",
      role: "Computer Scientist & US Navy Rear Admiral",
      testimonial:
        "Efficient, easy to use, and reliable! It’s helped me stay connected and focused on my clients’ needs, making my job much smoother.",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Nikola Tesla",
      role: "Inventor & Electrical Engineer",
      testimonial:
        "A brilliant tool for organizing client schedules and feedback. It’s saved me so much time and hassle. Definitely worth it!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Lise Meitner",
      role: "Physicist",
      testimonial:
        "The platform has been a great help in keeping my clients' data organized and accessible. The ease of use has been excellent!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Richard Feynman",
      role: "Physicist",
      testimonial:
        "As a professional, I need tools that simplify my workflow. This platform provides exactly that, and it’s made managing my work much easier!",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Katherine Johnson",
      role: "Mathematician & Physicist",
      testimonial:
        "I’m able to connect with clients faster and track their progress seamlessly. It’s intuitive and helps me stay on top of everything!",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-16 flex flex-col gap-6">
      <h3
        className="text-xl font-semibold text-center"
      >
        Testimonials from other
        <br />
        successful Coaches
      </h3>
      <div
        className="mt-8"
      >
        <Carousel responsive={responsive} className="pl-44 pb-24" infinite={true} arrows={false} customButtonGroup={<ButtonGroup />}>
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function Item({ imageUrl, name, role, testimonial }: any) {
  return (
    <div
      className="flex flex-col gap-4 w-[500px] pl-4"
    >
      <div className="flex items-end gap-3">
        <Avatar className="rounded-lg w-24 h-24">
          <AvatarImage src={imageUrl} alt={name} className="!rounded-lg" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <span className="text-sm">{role}</span>
        </div>
      </div>
      <div className="p-6 bg-secondary flex flex-col gap-2 h-[200px] rounded-md">
        <Icon name="quotes" size={35} />
        <p>{testimonial}</p>
      </div>
    </div>
  );
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }:any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group absolute bottom-0 right-44 flex gap-12">
      <button className={currentSlide === 0 ? 'disable' : ""} onClick={() => previous()}>
        <Icon name="arrow_lesser_black" size={40} />
      </button>
      <button onClick={() => next()}>
        <Icon name="arrow_greater_black" size={40} />
      </button>
    </div>
  );
};

export default Testimonials;
