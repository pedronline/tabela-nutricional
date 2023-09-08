'use client';
import { ArrowLeft, Heart } from 'lucide-react';
import Image from 'next/image';
import fruta from '@/assets/fruta.png';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  return (
    <main className="bg-surfaceElement h-screen max-w-[400px]">
      <div className="flex justify-between p-6">
        <button>
          <ArrowLeft className="h-8 w-8  " />
        </button>
        <button>
          <Heart className="h-8 w-8 hover:text-secondary hover:fill-secondary " />
        </button>
      </div>

      <div className="z-20 flex justify-center mt-[-50px]">
        <Image src={fruta} width={300} height={300} alt="fruta" />
      </div>

      <div className="z-10 bg-white h-screen rounded-3xl mt-[-220px]  ">
        <div className="pt-[250px] flex justify-center text-2xl font-semibold">
          {' '}
          Salada Variada
        </div>
        <div className="flex">
          <div className="w-[50%] flex justify-center text-sm">
            Energia <br /> 221,15 kcal
          </div>
          <div className="w-[50%] flex justify-center text-sm">
            porção total <br /> 240g
          </div>
        </div>
        <div className="text-sm ml-8 mr-11 mt-10 font-semibold">
          <div className="flex justify-between">
            <div className="mb-2 mt-2">Proteinas</div>
            <div className="mb-2 mt-2">15,13g</div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-2 mt-2">Carboidratos</div>
            <div className="mb-2 mt-2">18,40g</div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-2 mt-2">Açucar</div>
            <div className="mb-2 mt-2">4,88g</div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-2 mt-2">Gorduras</div>
            <div className="mb-2 mt-2">5,18g</div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
            <div className="bg-surfaceElement h-3 w-10 rounded-full gap-3"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger>
              <Button className="w-80 h-14 mt-10 mr-4 text-white">
                Mais detalhes
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className="flex justify-center">
                  <div className="w-20 h-2 bg-primary rounded"></div>
                </div>
                <DialogTitle className="flex justify-center">
                  Mais detalhes
                </DialogTitle>
                <DialogDescription>
                  <ul className="leading-8">
                    <div className="flex justify-between leading-8">
                      <li>Energia</li>
                      <span>221.15 kcal</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Proteínas</li>
                      <span>15,13 g</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Carboidratos</li>
                      <span>18,40 g</span>
                    </div>
                    <div className="flex justify-between leading-8 ml-3">
                      <li>Fibra Alimentar</li>
                      <span>5,83 g</span>
                    </div>
                    <div className="flex justify-between leading-8 ml-3">
                      <li>Açucar</li>
                      <span>4,88 g</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Gorduras Totais</li>
                      <span>5,18 g</span>
                    </div>
                    <div className="flex justify-between leading-8 ml-3">
                      <li>Gorduras Saturadas</li>
                      <span>0,86 g</span>
                    </div>
                    <div className="flex justify-between leading-8 ml-3">
                      <li>Gorduras Trans</li>
                      <span>0 g</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Colesterol</li>
                      <span>0 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Sódio</li>
                      <span>243,03 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Potácio</li>
                      <span>291,85 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Cálcio</li>
                      <span>49,02 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Ferro</li>
                      <span>2,91 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Magnésio</li>
                      <span>48,23 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Vitamina C</li>
                      <span>29,49 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Vitamina D</li>
                      <span>24,88 mg</span>
                    </div>
                    <div className="flex justify-between leading-8">
                      <li>Vitamina B6</li>
                      <span>32,40 mg</span>
                    </div>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
