package damian.tab.bankreality.exception;

public class RemovingNecessaryEntityException extends RuntimeException {

    public RemovingNecessaryEntityException() {
        super("Cannot delete that entity. Please remove first dependent entities like Investment, Credit, Transactions and try again.");
    }
}
