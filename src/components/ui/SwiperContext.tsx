"use client";
import { createContext, useContext, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper } from "swiper/react";

export const SwiperContext = createContext({
  slideIndex: 0,
  setSlideIndex: (_: number) => {},
  swiper: null as SwiperType | null,
  setSwiper: (_: SwiperType) => {},
  handleSlideChange: (_: number) => {},
});

export function SwiperProvider({ children }: { children: React.ReactNode }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
    swiper?.slideTo(index);
  };

  return (
    <SwiperContext value={{ slideIndex, setSlideIndex, swiper, setSwiper, handleSlideChange }}>
      {children}
    </SwiperContext>
  );
}

export function ContextSwiper({ children }: { children: React.ReactNode }) {
  const { setSwiper, setSlideIndex } = useContext(SwiperContext);
  return (
    <Swiper onSwiper={setSwiper} onSlideChange={(s) => setSlideIndex(s.activeIndex)}>
      {children}
    </Swiper>
  );
}
