package com.sebas.backend.cartapp.backendcartapp.services;

import java.util.List;
import com.sebas.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
