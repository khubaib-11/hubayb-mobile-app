import supabase from '@/services/supabase/supabase';

async function getProductsBySelectedCategory(categoryId: string) {
  const { data, error } = await supabase
    .from('products')
    .select(
      'product_name,product_image, product_price, product_description, is_available, available_filters,product_weight',
    )
    .eq('category_id', categoryId);

  if (error) {
    return error.message;
  }

  return data;
}

export default getProductsBySelectedCategory;
