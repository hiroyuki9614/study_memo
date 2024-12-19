import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponents from '../../src/app/component/ui/button/index'

describe('ButtonComponent', () => {
  it('ボタンをクリックするとテキストが変更される', () => {
    render(<ButtonComponents />);

    // 初期テキストの確認
    expect(screen.getByText('初期テキスト')).toBeInTheDocument();

    // ボタンのクリック
    fireEvent.click(screen.getByText('ボタンをクリック'));

    // 更新されたテキストの確認
    expect(screen.getByText('更新されたテキスト')).toBeInTheDocument();
  });
});