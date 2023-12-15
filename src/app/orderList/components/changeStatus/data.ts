export interface StatusOption {
    readonly value: string;
    readonly label: string;
}

export const statusOptions: StatusOption[] = [
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' }
]