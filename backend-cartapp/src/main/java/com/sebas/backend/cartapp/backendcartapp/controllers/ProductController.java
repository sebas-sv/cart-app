package com.sebas.backend.cartapp.backendcartapp.controllers;

import com.sebas.backend.cartapp.backendcartapp.services.ProductService;
import com.sebas.backend.cartapp.backendcartapp.models.entities.Product;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5174/")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> list() {
        return service.findAll();
    }
}
