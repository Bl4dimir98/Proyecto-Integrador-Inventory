import { categoryModel } from "./category.model";
export interface productModel {
    id: number;
    title: string;
    description: string;
    price: number;
    category: categoryModel;
    images: string[];
}
export interface createProductModelDTO extends Omit<productModel, 'id' | 'category'> {
    categoryId: number;
}
export interface updateProductModelDTO extends Partial<productModel> {
    categoryId?: number;
}