import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import serviceProduct from "../../services/productService";

interface ProductSelectProps {
  imageUrl: string;
  name: string;
  qtd: string;
}

export const useStock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductSelectProps>({
    imageUrl: "",
    name: "",
    qtd: "",
  });
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const prod = await serviceProduct.getProduct();
      setProducts(prod.data);
      setLoading(false);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setErrorFetch(true);
    }
  };

  const handlePresentModalPress = useCallback((item: any) => {
    setProductSelected(item);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [visible]);

  return {
    loading,
    products,
    snapPoints,
    errorFetch,
    productSelected,
    bottomSheetModalRef,
    getProducts,
    handleSheetChanges,
    handlePresentModalPress,
  }; // Retornar a mensagem de erro
};
