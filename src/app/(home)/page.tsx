import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div>
      <div className="relative w-full min-h-screen bg-cover bg-center top-0 bg-[url('/images/header.png')]">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex justify-center items-center min-h-screen text-white w-full">
          <div className="flex flex-col w-full max-w-6xl px-4">
            <div>
              <h1 className="text-6xl font-bold">Pesape’an</h1>
              <h2 className="text-4xl font-bold mt-2">(Preferensi Sapi dan Penjualan)</h2>
            </div>
            <p className="mt-6 w-[50rem]">Website ini diperuntukkan untuk para peternak sapi yang ingin memamerkan sapi mereka sekaligus tawar menawar harga yang layak untuk sapi tersebut.</p>
            <Button className="w-max bg-white bg-opacity-25 backdrop-blur-sm text-white border-white border rounded-full px-6 mt-6 hover:backdrop-blur-md hover:bg-opacity-50 hover:bg-white">Selengkapnya</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-20 gap-5 max-w-6xl mx-auto max-md:flex-wrap px-4">
        <div className="w-full">
          <Image src={'/images/sapihome.png'} width={260} height={100} alt="Gambar Sapi" className="rounded-lg max-md:w-full" />
        </div>

        <div>
          <p className="text-2xl font-bold">Tentang Sape Sonok</p>
          <p className="mt-3">
            Sapi Sonok adalah jenis perlombaan kecantikan dan ketangkasan sapi yang berasal dari Madura, Jawa Timur. Tradisi ini merupakan salah satu budaya lokal yang melibatkan sapi betina, yang dinilai berdasarkan kecantikan, kerapian,
            serta keluwesan gerak saat berjalan. Sapi-sapi ini biasanya dihias dengan pernak-pernik dan aksesoris yang indah, serta didandani dengan pakaian khusus yang membuat mereka terlihat lebih menarik
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <p className="text-2xl font-bold text-center">Awal mula pembuatan website pesape’an!</p>
        <div className="flex flex-col gap-4 mt-10">
          <p>
            Di tengah perkembangan teknologi yang pesat, banyak sektor usaha mulai beradaptasi dengan inovasi digital, termasuk bidang peternakan sapi di Madura. Dari kebutuhan inilah lahir sebuah ide untuk membangun Pesape&apos;an, sebuah
            platform online yang diciptakan untuk memudahkan para peternak sapi dalam memasarkan hasil ternaknya dan memberikan kemudahan bagi para pembeli dalam mencari sapi berkualitas.
          </p>
          <p>
            Nama Pesape&apos;an diambil dari gabungan dua kata: &quot;Preferensi&quot; dan **&quot;Sapi&quot;**, yang mencerminkan tujuan utama dari website ini, yaitu menjadi tempat referensi utama bagi pembeli dalam menemukan sapi yang
            sesuai dengan kebutuhan mereka. Selain itu, platform ini juga mengedepankan aspek **Penjualan**, di mana peternak bisa dengan mudah menawarkan sapinya melalui platform ini tanpa harus melalui proses pemasaran yang rumit
          </p>
          <p>
            Sejak awal dibentuk, **Pesape&apos;an** dirancang dengan harapan untuk menjadi jembatan antara peternak dan pembeli, khususnya di Madura, yang terkenal dengan kualitas sapi-sapinya. Melalui situs ini, para peternak dapat menjual
            sapinya dengan lebih luas dan efektif. Sementara itu, para pembeli dapat mengeksplorasi pilihan sapi yang tersedia dengan informasi yang lengkap, termasuk berat, jenis, usia, dan harga yang tertera dengan transparan.
          </p>
          <p>
            Pesape&apos;an diharapkan dapat menjadi solusi yang inovatif dan berkelanjutan bagi para peternak lokal, membantu mereka untuk berkembang di era digital ini, sekaligus memudahkan proses jual beli sapi di Madura dengan cara yang
            lebih modern, cepat, dan efisien.
          </p>
        </div>
      </div>
    </div>
  );
}
