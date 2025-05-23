export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          category: string | null;
          id: string;
        };
        Insert: {
          category?: string | null;
          id?: string;
        };
        Update: {
          category?: string | null;
          id?: string;
        };
        Relationships: [];
      };
      filters: {
        Row: {
          filter_name: string;
          id: string;
          parent_category: string | null;
        };
        Insert: {
          filter_name?: string;
          id?: string;
          parent_category?: string | null;
        };
        Update: {
          filter_name?: string;
          id?: string;
          parent_category?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_filters_parent_category_fkey';
            columns: ['parent_category'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
        ];
      };
      ordered_item: {
        Row: {
          id: number;
          order_id: string | null;
          ordered_item_price: number | null;
          ordered_item_quantity: number | null;
          product_id: number | null;
          total_price: number;
        };
        Insert: {
          id?: number;
          order_id?: string | null;
          ordered_item_price?: number | null;
          ordered_item_quantity?: number | null;
          product_id?: number | null;
          total_price: number;
        };
        Update: {
          id?: number;
          order_id?: string | null;
          ordered_item_price?: number | null;
          ordered_item_quantity?: number | null;
          product_id?: number | null;
          total_price?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'public_orderd_item_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
        ];
      };
      orders: {
        Row: {
          created_at: string | null;
          customer_id: string;
          delivery_address: string | null;
          delivery_fee: number;
          delivery_time: string | null;
          id: string;
          order_id: string;
          order_priority: string;
          order_status: string;
          total_price: number;
        };
        Insert: {
          created_at?: string | null;
          customer_id?: string;
          delivery_address?: string | null;
          delivery_fee: number;
          delivery_time?: string | null;
          id?: string;
          order_id?: string;
          order_priority?: string;
          order_status?: string;
          total_price: number;
        };
        Update: {
          created_at?: string | null;
          customer_id?: string;
          delivery_address?: string | null;
          delivery_fee?: number;
          delivery_time?: string | null;
          id?: string;
          order_id?: string;
          order_priority?: string;
          order_status?: string;
          total_price?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'public_orders_customer_id_fkey';
            columns: ['customer_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          available_filters: string[] | null;
          category_id: string;
          created_at: string;
          id: number;
          is_available: boolean;
          product_barcode: string;
          product_description: string | null;
          product_image: string;
          product_name: string;
          product_price: number;
          product_search_vector: unknown | null;
          product_weight: string | null;
        };
        Insert: {
          available_filters?: string[] | null;
          category_id?: string;
          created_at?: string;
          id?: number;
          is_available?: boolean;
          product_barcode?: string;
          product_description?: string | null;
          product_image?: string;
          product_name: string;
          product_price: number;
          product_search_vector?: unknown | null;
          product_weight?: string | null;
        };
        Update: {
          available_filters?: string[] | null;
          category_id?: string;
          created_at?: string;
          id?: number;
          is_available?: boolean;
          product_barcode?: string;
          product_description?: string | null;
          product_image?: string;
          product_name?: string;
          product_price?: number;
          product_search_vector?: unknown | null;
          product_weight?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_products_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
        ];
      };
      user_favorite_products: {
        Row: {
          id: number;
          liked_product_id: number | null;
          user: string;
        };
        Insert: {
          id?: number;
          liked_product_id?: number | null;
          user: string;
        };
        Update: {
          id?: number;
          liked_product_id?: number | null;
          user?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_user_favorite_products_liked_product_id_fkey';
            columns: ['liked_product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_user_favorite_products_user_fkey';
            columns: ['user'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
