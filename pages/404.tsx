import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div>
            <h1>
                К сожалению, такой страницы не существуют
            </h1>
            <div>
                Вы можете перейти на главную страницу
                <Link href="/">
                    главную страницу
                </Link>
                , или оставить свой комментарий на
                <Link href="/contacts">
                    странице контактов
                </Link>
            </div>
        </div>
    );
}