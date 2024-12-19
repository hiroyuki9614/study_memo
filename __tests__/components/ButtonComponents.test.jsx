// __tests__/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

describe('Button Component', () => {
  // 基本的なレンダリングテスト
  it('テキストを正しくレンダリングする', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // サイズバリエーションのテスト
  it.each(['xs', 'sm', 'base', 'lg', 'xl'] as const)(
    'サイズ %s が正しく適用される',
    (size) => {
      render(<Button size={size}>Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(SIZES[size]);
    }
  );

  // バリアントのテスト
  it.each(['primary', 'secondary', 'tertiary', 'disable'] as const)(
    'バリアント %s が正しく適用される',
    (variant) => {
      render(<Button variant={variant}>Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(VARIANTS[variant]);
    }
  );

  // アイコンのテスト
  it('アイコンが正しくレンダリングされる', () => {
    render(<Button icon={faSearch}>Search</Button>);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  // アイコン位置のテスト
  it('アイコンの位置が正しく設定される', () => {
    render(<Button icon={faSearch} iconPosition="right">Search</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(ICON_POSITION.right);
  });

  // クリックイベントのテスト
  it('クリックイベントが正しく発火する', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // disabled状態のテスト
  it('disabled状態が正しく機能する', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // カスタムクラスのテスト
  it('カスタムクラスが正しく適用される', () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  // アイコンのみのテスト
  it('アイコンのみのボタンが正しくレンダリングされる', () => {
    render(<Button icon={faSearch} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass(ICON_SIZES.base);
  });

  // type属性のテスト
  it('デフォルトのtype属性が設定される', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('カスタムtype属性が設定される', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});