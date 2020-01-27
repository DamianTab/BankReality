package damian.tab.bankreality.exception;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException() {
        super("Entity not found in database.");
    }

}
