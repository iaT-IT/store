export interface Category {
   id: string;
   billboardId: string;
   name: string;
}

export interface Color {
   id: string;
   name: string;
   value: string;
}

export interface Size {
   id: string;
   name: string;
   value: string;
}

export interface Image {
   id: string;
   productId: string;
   url: string;
}
export interface Product {
   id: string;
   categoryId: string;
   name: string;
   price: string;
   isFeatured: boolean;
   isArchived: boolean;
   sizeId: string;
   colorId: string;
   images: Image[];
   category: Category;
   color: Color;
   size: Size;
}
