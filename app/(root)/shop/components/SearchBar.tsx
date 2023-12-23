'use client';
import Heading from '@/helpers/heading';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
if (typeof window !== 'undefined') {
  // Sử dụng hook useState chỉ khi chạy trên máy khách
  const [searchTerm, setSearchTerm] = useState<string>('');
}
interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSearch = () => {
    // Xử lý khi người dùng nhấn Enter hoặc nút tìm kiếm
    // Đối với ví dụ này, chúng ta chỉ đơn giản log giá trị searchTerm
    console.log(searchTerm);

    // Bạn có thể thêm logic xử lý tìm kiếm ở đây, ví dụ chuyển hướng đến trang tìm kiếm
    // router.push(`/search?query=${searchTerm}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-neutral-900 p-2"
      />
      <Button
        onClick={onSearch}
        className="bg-transparent text-neutral-900 dark:text-white border border-neutral-900 dark:border-white hover:opacity-70"
        variant={'outline'}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
