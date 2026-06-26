'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { currencyConfig } from '@/data/pricingMatrix';
import { Currency } from '@/types/pricing';

interface DropdownProps {
  value: Currency;
  onChange: (value: Currency) => void;
}

export default function Dropdown({ value, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openDropdown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setOpen((o) => !o);
  };

  const options = Object.keys(currencyConfig) as Currency[];
  const selected = currencyConfig[value];

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      <button
        ref={triggerRef}
        onClick={openDropdown}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'border-color var(--transition-micro)',
          minWidth: '110px',
          justifyContent: 'space-between',
        }}
      >
        <span>{selected.symbol} {selected.label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-micro)',
          }}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="var(--text-muted)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {mounted && open &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: 'absolute',
              top: coords.top,
              left: coords.left,
              width: coords.width,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              zIndex: 9999,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  background: opt === value ? 'rgba(255,200,1,0.1)' : 'transparent',
                  border: 'none',
                  color: opt === value ? 'var(--forsythia)' : 'var(--text-secondary)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background var(--transition-micro)',
                }}
              >
                {currencyConfig[opt].symbol} {currencyConfig[opt].label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}