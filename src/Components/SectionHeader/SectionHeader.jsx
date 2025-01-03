import FadeInAnimation from '../FadeInAnimation/FadeInAnimation';

const SectionHeader = ({heading}) => {
    return (
      <FadeInAnimation custom={1}>
        <div className="font-second_font text-center md:w-4/12 mx-auto pt-5 pb-4 md:pt-20 md:pb-5 ">
          <h3 className="md:text-4xl text-3xl dark:text-white text-gray-900 py-4 ">
            {heading}
          </h3>
        </div>
      </FadeInAnimation>
    );
};

export default SectionHeader;