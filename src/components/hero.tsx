import heroBg from '../assets/backgroundImages/hero-bg.webp';
import { Header } from './header';
import { Button } from './button';

export const Hero: React.FC = () => (
    <section
        className="relative full-container bg-cover bg-center text-center pb-15 sm:pb-12"
        style={{ backgroundImage: `url(${heroBg})` }}
    >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-xs"></div>

        <div className="relative z-10">
            <Header />
            <h1 className="slide-in text-5xl mt-8 mb-1 mx-1 md:text-6xl font-bold">
                We Trim Real Good✂️🌿
            </h1>
            <p className="slide-in text-lg md:text-xl mb-1 mx-1">
                Your all in one landscaping and garden maintenance solution
            </p>
            <Button />
        </div>
    </section>
);
