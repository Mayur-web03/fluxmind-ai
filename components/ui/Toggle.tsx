'use client';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      <span
        style={{
          position: 'relative',
          width: '48px',
          height: '26px',
          borderRadius: '100px',
          background: checked
            ? 'linear-gradient(135deg, var(--forsythia), var(--deep-saffron))'
            : 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          transition: 'background var(--transition-micro)',
          display: 'block',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '3px',
            left: checked ? '25px' : '3px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'white',
            transition: 'left var(--transition-micro)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        />
      </span>
      {label && (
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
}