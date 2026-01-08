import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Products.scss';

const Products: React.FC = () => {
  return (
    <Box className="products-section" id="products">
      <Box className="products-content">
        <Typography variant="h3" className="products-title">
          Products
        </Typography>
        <Typography className="products-description">
          Explore our suite of HR tools built to streamline hiring, onboarding, and people operations.
        </Typography>
        <Button className="products-cta">See all products</Button>
      </Box>

      <div className="products-cards">
        <div className="product-card" style={{ animationDelay: '0s' }}>
          <h4>Core HR</h4>
          <p>Centralized employee records and workflows.</p>
        </div>
        <div className="product-card" style={{ animationDelay: '0.2s' }}>
          <h4>Payroll</h4>
          <p>Simple, compliant payroll processing.</p>
        </div>
        <div className="product-card" style={{ animationDelay: '0.4s' }}>
          <h4>Recruiting</h4>
          <p>Manage candidates and hiring pipelines.</p>
        </div>
      </div>
    </Box>
  );
};

export default Products;
