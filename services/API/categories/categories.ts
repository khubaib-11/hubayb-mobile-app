import supabase from '@/services/supabase/supabase';

async function getAllCategories() {
  try {
    const { data: categories, error } = await supabase.from('categories').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return categories;
  } catch (error) {
    console.log(error);
  }
}
export default getAllCategories;
