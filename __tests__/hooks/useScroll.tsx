import { renderHook, act } from '@testing-library/react';
import { useScroll } from '@/app/hooks/useScroll';
import { describe, it } from 'node:test';

describe('useScroll hook', () => {
    it('should respond to window scroll events', () => {
        const { result } = renderHook(() => useScroll());

        act(() => {
            window.scrollY = 200;
            window.dispatchEvent(new Event('scroll'));
        });

    
    });
});