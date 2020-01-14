export class Supplier {
    name: string;
    sku: string;
    stockQty?: number;
    price?: number;
    currency?: string;
    validFrom?: string;
    validTo?: string;
    isPrefered?: boolean;

    serviceCost?: number;
}
